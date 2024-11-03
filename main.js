async function fetchPathImage() {
  const response = await fetch("http://127.0.0.1:5000/route?image_path=./MPS/img2.png&start_x=10&start_y=10&end_x=75&end_y=150");
  if (response.ok) {
    const blob = await response.blob();
    const imageURL = URL.createObjectURL(blob);
    document.getElementById("pathImage").src = imageURL;
  } else {
    console.error("Failed to fetch the path image.");
  }
}
