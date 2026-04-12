import { useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import config from "../config";
import { ArrowLeft, Users, HelpCircle, BarChart3, FileText, Eye, ToggleLeft, ToggleRight, KeyRound, Trash2, Download, UserPlus } from "lucide-react";

const API_URL = config.apiUrl;

interface AdminUser {
  id: string;
  email: string;
  name: string;
  language: string;
  exam_date: string | null;
  created_at: string;
  disabled: number;
  total_attempts: number;
  correct_attempts: number;
}

interface AdminStats {
  users: number;
  questions: number;
  attempts: number;
  sessions: number;
}

export default function Admin() {
  const { t } = useI18n();
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [userActivity, setUserActivity] = useState<Record<string, unknown> | null>(null);
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [newUser, setNewUser] = useState({ email: "", password: "", name: "", language: "es" });

  const headers = { "X-Admin-Password": password, "Content-Type": "application/json" };

  const loadData = async () => {
    setLoading(true);
    try {
      const [usersRes, statsRes] = await Promise.all([
        fetch(`${API_URL}/api/admin/users`, { headers }),
        fetch(`${API_URL}/api/admin/stats`, { headers }),
      ]);
      if (!usersRes.ok) throw new Error("Invalid password");
      setUsers(await usersRes.json());
      setStats(await statsRes.json());
      setAuthenticated(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  };

  const toggleUser = async (userId: string) => {
    await fetch(`${API_URL}/api/admin/users/${userId}/toggle`, { method: "PUT", headers });
    await loadData();
  };

  const resetPassword = async (userId: string) => {
    const newPw = window.prompt("Enter new password:");
    if (!newPw) return;
    await fetch(`${API_URL}/api/admin/users/${userId}/reset-password`, {
      method: "PUT",
      headers,
      body: JSON.stringify({ new_password: newPw }),
    });
    alert("Password reset successfully");
  };

  const deleteUser = async (userId: string) => {
    if (!window.confirm("Are you sure you want to delete this user? This cannot be undone.")) return;
    await fetch(`${API_URL}/api/admin/users/${userId}`, { method: "DELETE", headers });
    setSelectedUser(null);
    setUserActivity(null);
    await loadData();
  };

  const viewActivity = async (userId: string) => {
    const res = await fetch(`${API_URL}/api/admin/users/${userId}/activity`, { headers });
    const data = await res.json();
    setSelectedUser(userId);
    setUserActivity(data);
  };

  const exportCSV = () => {
    window.open(`${API_URL}/api/admin/export`);
  };

  const createUser = async () => {
    try {
      const res = await fetch(`${API_URL}/api/admin/users`, {
        method: "POST",
        headers,
        body: JSON.stringify(newUser),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to create");
      }
      setShowCreateUser(false);
      setNewUser({ email: "", password: "", name: "", language: "es" });
      await loadData();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to create user");
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <Link to="/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 text-sm">
            <ArrowLeft size={16} /> {t("common.back")}
          </Link>
          <h1 className="text-2xl font-bold text-white mb-4">Admin Panel</h1>
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm mb-4">
              {error}
            </div>
          )}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
            <input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && loadData()}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              onClick={loadData}
              disabled={loading}
              className="w-full py-3 rounded-xl text-white font-semibold disabled:opacity-50"
              style={{ backgroundColor: config.themeColor }}
            >
              {loading ? t("common.loading") : "Access Admin"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
          <div className="flex gap-2">
            <button onClick={() => setShowCreateUser(true)} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-white border border-gray-700 hover:bg-white/5">
              <UserPlus size={14} /> Add User
            </button>
            <button onClick={exportCSV} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-white border border-gray-700 hover:bg-white/5">
              <Download size={14} /> Export CSV
            </button>
          </div>
        </div>

        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { icon: Users, label: "Users", value: stats.users },
              { icon: HelpCircle, label: "Questions", value: stats.questions },
              { icon: BarChart3, label: "Attempts", value: stats.attempts },
              { icon: FileText, label: "Sessions", value: stats.sessions },
            ].map((s) => (
              <div key={s.label} className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
                <s.icon size={20} className="text-gray-400 mb-2" />
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        {showCreateUser && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6 space-y-3">
            <h3 className="text-white font-semibold">Create User</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input type="text" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 text-white text-sm focus:outline-none" />
              <input type="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 text-white text-sm focus:outline-none" />
              <input type="password" placeholder="Password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 text-white text-sm focus:outline-none" />
              <select value={newUser.language} onChange={(e) => setNewUser({ ...newUser, language: e.target.value })} className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 text-white text-sm focus:outline-none">
                <option value="es">Espanol</option>
                <option value="en">English</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button onClick={createUser} className="px-4 py-2 rounded-xl text-sm text-white font-medium" style={{ backgroundColor: config.themeColor }}>Create</button>
              <button onClick={() => setShowCreateUser(false)} className="px-4 py-2 rounded-xl text-sm text-gray-400 border border-gray-700">{t("common.cancel")}</button>
            </div>
          </div>
        )}

        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left text-gray-400 px-4 py-3">Name</th>
                  <th className="text-left text-gray-400 px-4 py-3">Email</th>
                  <th className="text-left text-gray-400 px-4 py-3">Attempts</th>
                  <th className="text-left text-gray-400 px-4 py-3">Accuracy</th>
                  <th className="text-left text-gray-400 px-4 py-3">Status</th>
                  <th className="text-left text-gray-400 px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b border-gray-800 last:border-0 hover:bg-white/5">
                    <td className="px-4 py-3 text-white">{u.name}</td>
                    <td className="px-4 py-3 text-gray-400">{u.email}</td>
                    <td className="px-4 py-3 text-gray-300">{u.total_attempts}</td>
                    <td className="px-4 py-3 text-gray-300">
                      {u.total_attempts > 0
                        ? `${Math.round((u.correct_attempts / u.total_attempts) * 100)}%`
                        : "-"}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${u.disabled ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"}`}>
                        {u.disabled ? "Disabled" : "Active"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button onClick={() => viewActivity(u.id)} className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white" title="View Activity">
                          <Eye size={14} />
                        </button>
                        <button onClick={() => toggleUser(u.id)} className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white" title="Toggle Status">
                          {u.disabled ? <ToggleLeft size={14} /> : <ToggleRight size={14} />}
                        </button>
                        <button onClick={() => resetPassword(u.id)} className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white" title="Reset Password">
                          <KeyRound size={14} />
                        </button>
                        <button onClick={() => deleteUser(u.id)} className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-red-400" title="Delete">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {selectedUser && userActivity && (
          <div className="mt-6 bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">
                User Activity: {(userActivity as { user: { name: string } }).user.name}
              </h3>
              <button onClick={() => { setSelectedUser(null); setUserActivity(null); }} className="text-gray-400 hover:text-white text-sm">
                Close
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-800 rounded-xl p-3 text-center">
                <p className="text-xl font-bold text-white">{(userActivity as { summary: { total: number } }).summary.total}</p>
                <p className="text-gray-400 text-xs">Total Attempts</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-3 text-center">
                <p className="text-xl font-bold text-white">{(userActivity as { summary: { correct: number } }).summary.correct}</p>
                <p className="text-gray-400 text-xs">Correct</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
