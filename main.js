const randomDog = async () =>  {
 const URL = "https://dog.ceo/api/breeds/image/random";

 const dogImage = document.getElementById('dogImage');

 const response = await fetch(URL)
 const data = await response.json()
 console.log(data)

 dogImage.src = data.message;
 dogImage.height = 250;
 dogImage.Width = 300;

}