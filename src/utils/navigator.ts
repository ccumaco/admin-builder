export const getLocationPermission = async () => {
  if (navigator.geolocation) {
    try {
      const permissionStatus = await navigator.permissions.query({
        name: 'geolocation',
      })

      if (permissionStatus.state === 'denied') {
        alert('Please allow location access.')
        window.location.href = 'app-settings:location'
        return permissionStatus.state
      } else {
        navigator.geolocation.getCurrentPosition((e) => {
          return 'granted'
        })
        return permissionStatus.state
      }
    } catch (error) {
      console.error('Error checking geolocation permissions:', error)
      return 'error'
    }
  } else {
    alert('Geolocation is not supported in your browser.')
    return 'unsupported'
  }
}
