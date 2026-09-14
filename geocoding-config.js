/* Optional free Geoapify key: https://myprojects.geoapify.com/
   This is browser-visible. Restrict the key to your site's origin/referrer
   in Geoapify. Leave blank to use the offline gazetteer only.

   For local testing, set the key once in the browser console:
   localStorage.setItem('atlasGeoapifyKey', 'YOUR_KEY')
*/
window.ATLAS_GEOCODING = {
  apiKey: localStorage.getItem('atlasGeoapifyKey') || ''
};
