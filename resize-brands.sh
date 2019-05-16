if [ ! -d "public/brands" ]; then
  mkdir 'public/brands'
fi
pushd brands
var=0
for file in *
do
    convert "$file" -resize 100 "../public/brands/$var.png"
    ((var++))
done
popd