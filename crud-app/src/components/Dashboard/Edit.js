import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ communities, selectedCommunity, setCommunities, setIsEditing }) => {
  const id = selectedCommunity.id;

  const [communityName, setCommunityName] = useState(selectedCommunity.communityName);
  const [number, setNumber] = useState(selectedCommunity.number);
  const [meaning, setMeaning] = useState(selectedCommunity.meaning);
  const [memberNum, setMemberNum] = useState(selectedCommunity.memberNum);
  const [Birthdate, setBirthdate] = useState(selectedCommunity.Birthdate);

  const handleUpdate = e => {
    e.preventDefault();

    if (!communityName || !number || !meaning || !memberNum || !Birthdate) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const community = {
      id,
      communityName,
      number,
      meaning,
      memberNum,
      Birthdate,
    };

    for (let i = 0; i < communities.length; i++) {
      if (communities[i].id === id) {
        communities.splice(i, 1, community);
        break;
      }
    }

    localStorage.setItem('communities_data', JSON.stringify(communities));
    setCommunities(communities);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${community.communityName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Community</h1>
        <label htmlFor="communityName">Community Name</label>
        <input
          id="communityName"
          type="text"
          value={communityName}
          onChange={e => setCommunityName(e.target.value)}
        />
        <label htmlFor="number">Number</label>
        <input
          id="number"
          type="text"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <label htmlFor="meaning">Meaning</label>
        <input
          id="meaning"
          type="text"
          value={meaning}
          onChange={e => setMeaning(e.target.value)}
        />
        <label htmlFor="memberNum">Number of Members</label>
        <input
          id="memberNum"
          type="number"
          value={memberNum}
          onChange={e => setMemberNum(e.target.value)}
        />
        <label htmlFor="Birthdate">Birthdate</label>
        <input
          id="Birthdate"
          type="date"
          value={Birthdate}
          onChange={e => setBirthdate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
