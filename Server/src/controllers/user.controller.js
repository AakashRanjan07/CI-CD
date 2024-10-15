import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { User } from "../models/user.model.js";

// Route to handle avatar upload
const avatarFile = async (req, res) => {
  const { userName, email } = req.body;
  console.log(req.file?.path)
  const avatarLocalPath = req.file?.path;
  try {
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const user = await User.create({
      userName,
      email,
      avatar: avatar.url,
    });

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default avatarFile;
