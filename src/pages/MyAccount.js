import React, { useState } from "react";
import { getAccountData, saveAccountData } from "../data/accountService";
import { useNavigate } from "react-router-dom";

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

  if (!editing) {
    return (
      <div>
        <p>
          First Name: {data.firstName}
          <br />
          Last Name: {data.lastName}
          <br />
          Address: {data.address}
        </p>
        <button onClick={() => setEditing(true)}>Edit</button>
      </div>
    );
  }

  return (
    <div>
      <form>
        <label>
          First Name:
          <br />
          <input
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Last Name:
          <br />
          <input
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Address:
          <br />
          <textarea
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </label>
        <br />
        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}
