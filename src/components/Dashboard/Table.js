import React from 'react';

const Table = ({ communities, handleEdit, handleDelete }) => {
  // ID 설정 (선택적으로 사용)
  communities.forEach((community, i) => {
    community.id = i + 1;
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Community Name</th>
            <th>Number</th>
            <th>Meaning</th>
            <th>Number of Members</th>
            <th>Birthdate</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {communities.length > 0 ? (
            communities.map((community, i) => (
              <tr key={community.id}>
                <td>{i + 1}</td>
                <td>{community.communityName}</td>
                <td>{community.number}</td>
                <td>{community.meaning}</td>
                <td>{community.memberNum}</td>
                <td>{community.Birthdate}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(community.id)}
                    className="button edit-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(community.id)}
                    className="button delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Communities</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
