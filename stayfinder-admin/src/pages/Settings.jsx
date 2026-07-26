function Settings() {
  return (
    <div className="page">
      <h2>Settings</h2>

      <form className="property-form">

        <input
          type="text"
          placeholder="Admin Name"
          defaultValue="Shreya Singh"
        />

        <input
          type="email"
          placeholder="Email"
          defaultValue="admin@stayfinder.com"
        />

        <input
          type="password"
          placeholder="New Password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
        />

        <button type="submit">
          Save Changes
        </button>

      </form>
    </div>
  );
}

export default Settings;