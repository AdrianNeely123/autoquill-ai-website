#!/bin/bash
# Batch Light Mode Conversion Script
# Run this to convert remaining dark sections to light mode

# This script uses sed to replace dark colors with light equivalents
# across all remaining component files

FILES="components/Pricing.tsx components/Features.tsx components/HowItWorks.tsx components/DemoExperience.tsx components/Integrations.tsx components/UseCases.tsx components/ROIForm.tsx components/CTA.tsx"

for file in $FILES; do
  if [ -f "$file" ]; then
    echo "Converting $file..."
    
    # Background colors
    sed -i 's/bg-neutral-950/bg-white/g' "$file"
    sed -i 's/bg-neutral-900/bg-gray-50/g' "$file"
    sed -i 's/bg-neutral-800/bg-gray-100/g' "$file"
    sed -i 's/bg-white\/5/bg-gray-100/g' "$file"
    sed -i 's/bg-white\/10/bg-gray-50/g' "$file"
    
    # Text colors
    sed -i 's/text-white\([^-]\)/text-gray-900\1/g' "$file"
    sed -i 's/text-neutral-300/text-gray-700/g' "$file"
    sed -i 's/text-neutral-400/text-gray-600/g' "$file"
    sed -i 's/text-neutral-500/text-gray-500/g' "$file"
    
    # Borders
    sed -i 's/border-white\/5/border-gray-200/g' "$file"
    sed -i 's/border-white\/10/border-gray-200/g' "$file"
    sed -i 's/border-neutral-700/border-gray-300/g' "$file"
    
    # Accent colors
    sed -i 's/bg-accent-dark/bg-purple-700/g' "$file"
    sed -i 's/bg-accent/bg-purple-600/g' "$file"
    sed -i 's/text-accent/text-purple-700/g' "$file"
    sed -i 's/border-accent/border-purple-300/g' "$file"
    
    echo "✓ Converted $file"
  fi
done

echo "Done! All files converted to light mode."

