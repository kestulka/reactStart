function ProfilePicture() {
  const imageUrl = "./src/assets/profile-pic.jpg";

  const handleClick = (event) => (event.target.style.display = "none");

  return <img onClick={(event) => handleClick(event)} src={imageUrl}></img>;
}

export default ProfilePicture;
