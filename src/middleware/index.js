const checkPasswordStrength = (req, res, next) => {
  try {
    const uppercaseRegex = /[A-Z]/;
    const symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    const hasUppercase = uppercaseRegex.test(req.body.password);
    const hasSpecialCharacter = symbolRegex.test(req.body.password);

    if (hasSpecialCharacter && hasUppercase) {
      next();
    } else {
      throw new Error('Password must contain an uppercase and a special character')
    }
  } catch(error) {
    next(error);
  }
}
module.exports = checkPasswordStrength