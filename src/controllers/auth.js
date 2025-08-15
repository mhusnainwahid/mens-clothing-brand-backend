import User from "../models/auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signupUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!password || !email) {
      return res.status(400).json({
        message: "Required fields is mising!",
      });
    }
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({
        message: "User already exists!",
        existUser,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPass = bcrypt.hashSync(password, salt);
    const userObj = {
      name,
      email,
      password: hashPass,
      role,
    };
    const user = await User.create(userObj);

    // const transporter = nodemailer.createTransport({
    //   service: "Gmail",
    //   auth: {
    //     user: process.env.MY_EMAIL,
    //     pass: "jn7jnAPss4f63QBp6D",
    //   },
    // });

    // const info = await transporter.sendMail({
    //   from: process.env.MY_EMAIL,
    //   to: ,
    //   subject: "Hello ✔",
    //   text: "Hello world?",
    //   html: "<b>Hello world?</b>",
    // });

    console.log("Message sent:", info.messageId);

    return res.status(200).json({
      message: "User signup successfully!",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while signing up!",
      error: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!password || !email) {
      return res.status(400).json({
        message: "Required fields is mising!",
      });
    }
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(400).json({
        message: "User doesn't exists!",
      });
    }
    const comparePass = bcrypt.compareSync(password, existUser.password);
    if (!comparePass) {
      return res.status(400).json({
        message: "Wrong credentials!",
      });
    }
    const token = jwt.sign(
      { name: existUser.name, email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
    return res.status(200).json({
      message: "User login successfully!",
      existUser,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while login user!",
      error: error.message,
    });
  }
};
