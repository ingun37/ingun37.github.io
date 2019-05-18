if [ ! -d "public/books" ]; then
  mkdir 'public/books'
fi
pushd books
var=0
for file in *
do
    convert "$file" -resize 150 "../public/books/$var.jpg"
    ((var++))
done
popd