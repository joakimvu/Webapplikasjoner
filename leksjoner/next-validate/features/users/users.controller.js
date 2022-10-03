export const createUser = async (req, res) => {
  const { email, nickname } = req.body;

  // 400 Bad Request hvis validering feiler
  if (!validate.minLength(3, nickname) || !validate.isEmail(email))
    return res.status(400).json({
      success: false,
      error: "Missing required field: email or nickname",
    });

  const createdUser = await usersService.create({
    email,
    nickname,
  });

  // 500 Internal Server Error hvis noe går galt
  if (!createdUser?.success) {
    return res.status(500).json({
      success: false,
      error: createdUser.error,
    });
  }

  // 201 Created om alt går bra
  return res.status(201).json({
    success: true,
    data: createdUser.data,
  });
};
