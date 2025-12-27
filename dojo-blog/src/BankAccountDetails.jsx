import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

const BankAccountDetails = () => {
  const { data, loading, error } = useFetch("./userbanking.json");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!data?.users) return;

    const mappedUsers = data.users.slice(0, 6).map((user) => ({
      id: user.userId,
      fullName: user.fullName || "",
      email: user.email,
      phone: user.phone,
      bankAccount: {
        accountNumber: user.bankAccount?.accountNumber,
        accountType: user.bankAccount?.accountType,
        bankName: user.bankAccount?.bankName,
        ifscCode: user.bankAccount?.ifscCode,
        balance: user.bankAccount?.balance,
      },
    }));

    setUsers(mappedUsers);
  }, [data]);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error fetching data</h3>;

  return (
    <>
      <h2>Bank Account Details</h2>

      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Bank Name</th>
            <th>Account No</th>
            <th>IFSC</th>
            <th>Balance (₹)</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.bankAccount.bankName}</td>
              <td>{user.bankAccount.accountNumber}</td>
              <td>{user.bankAccount.ifscCode}</td>
              <td className="fw-bold text-success">
                ₹{user.bankAccount.balance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BankAccountDetails;
