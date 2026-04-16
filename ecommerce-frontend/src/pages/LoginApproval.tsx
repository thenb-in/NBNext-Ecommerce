/**
 * LoginApproval component.
 *
 * Displays a table of pending login/registration requests and provides
 * approve/reject actions for each. Communicates with the admin approval
 * API endpoint.
 *
 * @module LoginApproval
 */
import { useState } from "react";

/** Represents a single pending login/registration request. */
type LoginRequest = {
  id: string;
  name: string;
  username: string;
  role: string;
};

/** Props for the {@link LoginApproval} component. */
type Props = {
  /** Array of pending login requests to display. */
  loginRequests: LoginRequest[];
  /** Callback to refresh the login requests list after an action. */
  fetchLoginRequests: () => void;
  /** Callback to close the LoginApproval panel and return to the main view. */
  onclose: () => void;
};

/**
 * LoginApproval component.
 *
 * Renders a table of pending login requests with approve/reject buttons.
 * Sends approval decisions to `/api/v1/admin/approve_user` with a JWT
 * Bearer token from localStorage.
 *
 * @param props - The component props containing login requests and callbacks.
 * @returns The login approval panel JSX element.
 */
function LoginApproval({ loginRequests, fetchLoginRequests, onclose }: Props) {
  const [loading, setLoading] = useState(false);

  /**
   * Handles the approval or rejection of a login request.
   *
   * Sends a POST request to the admin approval endpoint with the user ID
   * and the approval status. Refreshes the request list on success.
   *
   * @param id - The unique identifier of the login request.
   * @param status - Whether to approve or reject the request.
   */
  const handleApproval = async (id: string, status: "approved" | "rejected") => {
    const check = status === "approved" ? true : null;

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Authorization token missing.");
        return;
      }

      const res = await fetch("api/v1/admin/approve_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, check }),
      });

      if (!res.ok) throw new Error("Update failed");

      alert(`User ${status}`);
      fetchLoginRequests();
    } catch {
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            📝 Login Requests
          </h2>
          <button
            onClick={onclose}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition duration-200"
          >
            Close
          </button>
        </div>

        {loading ? (
          <div className="text-center py-10 text-gray-600">Loading...</div>
        ) : loginRequests.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            🚫 No pending login requests
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="text-left px-4 py-3 text-gray-700 font-semibold">Name</th>
                  <th className="text-left px-4 py-3 text-gray-700 font-semibold">Username</th>
                  <th className="text-left px-4 py-3 text-gray-700 font-semibold">Role</th>
                  <th className="text-left px-4 py-3 text-gray-700 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loginRequests.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50 transition duration-150">
                    <td className="px-4 py-3 text-gray-800">{r.name}</td>
                    <td className="px-4 py-3 text-gray-600">{r.username}</td>
                    <td className="px-4 py-3 text-gray-600 capitalize">{r.role}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleApproval(r.id, "approved")}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-full text-sm mr-2 transition"
                      >
                        ✅ Approve
                      </button>
                      <button
                        onClick={() => handleApproval(r.id, "rejected")}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full text-sm transition"
                      >
                        ❌ Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginApproval;
