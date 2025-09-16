import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.models.js";




const registerUser = asyncHandler(async (req, res) => {
    // console.log("this is req.body: ",req.body);
    const { fullname, username, email, password } = req.body;
    // console.log("this is req.body: ",req.body);

    // validation
    if (
        [fullname, username, email, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required");
    }

    // check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        throw new ApiError(409, "User with this email or username already exists");
    }

    // create user
    const user = await User.create({
        fullname,
        username: username.toLowerCase(),
        email: email.toLowerCase(),
        password
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");
    if (!createdUser) {
        throw new ApiError(500, "User creation failed");
    }

    return res
        .status(201)
        .json(
            new ApiResponse(201, createdUser, "User created successfully")
        )
})

const loginUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    // validation
    
})

const logoutUser = asyncHandler(async (req, res) => {
    // TODO: logout user
})

const updateAccountDetails = asyncHandler(async (req, res) => {
    // TODO: update user
})




export {
    registerUser,
    loginUser,
    logoutUser,
    updateAccountDetails,
}