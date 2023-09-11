import axios from "axios"
const cxswdevAPI = axios.create({
  baseURL: "https://cxsw97-dev-115583.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return cxswdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_bvcgry_list(payload) {
  return cxswdevAPI.get(`/api/v1/bvcgry/`)
}
function api_v1_bvcgry_create(payload) {
  return cxswdevAPI.post(`/api/v1/bvcgry/`, payload)
}
function api_v1_bvcgry_retrieve(payload) {
  return cxswdevAPI.get(`/api/v1/bvcgry/${payload.id}/`)
}
function api_v1_bvcgry_update(payload) {
  return cxswdevAPI.put(`/api/v1/bvcgry/${payload.id}/`, payload)
}
function api_v1_bvcgry_partial_update(payload) {
  return cxswdevAPI.patch(`/api/v1/bvcgry/${payload.id}/`, payload)
}
function api_v1_bvcgry_destroy(payload) {
  return cxswdevAPI.delete(`/api/v1/bvcgry/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return cxswdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return cxswdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return cxswdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return cxswdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return cxswdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return cxswdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return cxswdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return cxswdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return cxswdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return cxswdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return cxswdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return cxswdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return cxswdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_bvcgry_list,
  api_v1_bvcgry_create,
  api_v1_bvcgry_retrieve,
  api_v1_bvcgry_update,
  api_v1_bvcgry_partial_update,
  api_v1_bvcgry_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
