import axiosIns from "../axios"

const setAuthHeader = token => {
  console.log('maya')
  if(token) {
    axiosIns.defaults.headers = {
      Authorization: 'Bearer 58|ZkE3gfiHCImLqxZl1u8XSGOFmRKn6DvfHhRCoj7L53b06dc0', 
    }

  }
  else{
    delete axiosIns.defaults.headers.Authorization
  }
}

export default setAuthHeader
