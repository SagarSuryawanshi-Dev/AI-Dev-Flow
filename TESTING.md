# Auth Service Testing

## Register

**Endpoint**

POST /api/v1/auth/register

### Test Cases

- [x] Register with valid data
- [x] Duplicate email returns error
- [x] Password stored as bcrypt hash

---

## Login

- [x] Valid credentials
- [x] Invalid password
- [x] Access token returned
- [x] Refresh cookie created

---

## Refresh Token

- [x] New access token generated
- [x] Refresh token rotated

---

## Logout

- [x] Refresh cookie cleared

---

## Get Profile

- [x] Returns authenticated user

---

## Change Password

- [x] Old password required
- [x] Login works with new password
- [x] Old password rejected