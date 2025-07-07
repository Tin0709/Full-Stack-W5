import React, { useState } from "react";
import { getAccountData, saveAccountData } from "../data/accountService";
import { useNavigate } from "react-router-dom";
import "./MyAccount.css";

export default function MyAccount() {
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState(getAccountData());
  const [formData, setFormData] = useState(data);
  const navigate = useNavigate();

  function handleSave() {
    saveAccountData(formData);
    setData(formData);
    setEditing(false);
    navigate("/account");
  }

  function handleCancel() {
    setFormData(data);
    setEditing(false);
    navigate("/account");
  }

  return (
    <div className="account-container">
      {!editing ? (
        <div className="account-card">
          <h2>My Account</h2>
          <p>
            <strong>First Name:</strong> {data.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {data.lastName}
          </p>
          <p>
            <strong>Address:</strong> {data.address}
          </p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      ) : (
        <div className="account-card">
          <h2>Edit Account</h2>
          <form>
            <label>First Name</label>
            <input
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <label>Last Name</label>
            <input
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            <label>Address</label>
            <textarea
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
            <div className="form-buttons">
              <button type="button" onClick={handleSave}>
                Save
              </button>
              <button type="button" onClick={handleCancel} className="cancel">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
