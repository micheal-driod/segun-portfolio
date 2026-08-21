$ErrorActionPreference = 'Stop'

# Sync the exact portfolio assets from the ZIP supplied for this project.
# Run this from the root of the cloned segun-portfolio repository.

$repoRoot = Split-Path -Parent $PSScriptRoot
$downloads = Join-Path $HOME 'Downloads'
$zip = Get-ChildItem $downloads -Filter '*.zip' -File -ErrorAction SilentlyContinue |
  Sort-Object LastWriteTime -Descending |
  Where-Object { $_.Name -match 'portfolio|segun|1455a20a|Adegbite' } |
  Select-Object -First 1

if (-not $zip) {
  throw "Portfolio ZIP not found in $downloads. Put the supplied ZIP in Downloads and run this script again."
}

$temp = Join-Path $env:TEMP 'segun-portfolio-assets'
if (Test-Path $temp) { Remove-Item $temp -Recurse -Force }
New-Item -ItemType Directory -Path $temp | Out-Null
Expand-Archive -Path $zip.FullName -DestinationPath $temp -Force

$files = @(
  'segun.jpg',
  'serenity-hero.png',
  'serenity-team.png',
  'ibarffs-mobile-app.jpg',
  'admin.png',
  'Linkqio-app.png',
  'banner.png'
)

$target = Join-Path $repoRoot 'public\images'
New-Item -ItemType Directory -Path $target -Force | Out-Null

foreach ($name in $files) {
  $found = Get-ChildItem $temp -Recurse -File -Filter $name | Select-Object -First 1
  if (-not $found) { throw "Required asset missing from ZIP: $name" }
  Copy-Item $found.FullName (Join-Path $target $name) -Force
  Write-Host "Copied $name" -ForegroundColor Green
}

Set-Location $repoRoot

git add public/images/segun.jpg public/images/serenity-hero.png public/images/serenity-team.png public/images/ibarffs-mobile-app.jpg public/images/admin.png public/images/Linkqio-app.png public/images/banner.png
git commit -m "assets: sync portfolio project imagery"
git push origin redesign-v2

Write-Host "" 
Write-Host "Portfolio assets pushed to redesign-v2." -ForegroundColor Cyan
Write-Host "Vercel should now create a preview deployment automatically if the project is Git-connected." -ForegroundColor Cyan
