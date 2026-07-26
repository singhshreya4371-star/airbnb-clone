function AddProperty() {
  return (
    <div className="page">
      <h2>Add Property</h2>

      <form className="property-form">

        <input
          type="text"
          placeholder="Property Name"
        />

        <input
          type="text"
          placeholder="Location"
        />

        <input
          type="number"
          placeholder="Price"
        />

        <input
          type="text"
          placeholder="Category"
        />

        <input
          type="text"
          placeholder="Image URL"
        />

        <textarea
          placeholder="Description"
          rows="5"
        ></textarea>

        <button type="submit">
          Add Property
        </button>

      </form>
    </div>
  );
}

export default AddProperty;