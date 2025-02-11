
#!/bin/bash

# Check if URL is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <image_url> <output_file>"
  exit 1
fi

IMAGE_URL=$1
OUTPUT_FILE=image-output.txt

# Download the image using curl
TEMP_IMAGE=$(mktemp)
curl -s -o "$TEMP_IMAGE" "$IMAGE_URL" || { echo "Failed to download image"; exit 1; }

# Check if ImageMagick is installed
if ! command -v identify &> /dev/null; then
  echo "ImageMagick is not installed. Please install it to use this script."
  rm "$TEMP_IMAGE"
  exit 1
fi

# Get the dimensions of the first frame of the image
DIMENSIONS=$(identify -format "%wx%h" "$TEMP_IMAGE[0]")

# Clean up
rm "$TEMP_IMAGE"

# Append the URL and dimensions to the file
echo "URL: $IMAGE_URL" >> "$OUTPUT_FILE"
echo "Dimensions: $DIMENSIONS" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"  # Add a blank line for readability

# Notify the user
echo "Output appended to $OUTPUT_FILE"
