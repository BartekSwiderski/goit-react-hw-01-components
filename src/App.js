
import Profile from "./components/profile/Profile";
import user from "./components/profile/user.json";

import Statistics from "./components/statistics/Statistics";
import statistics from "./components/statistics/data.json";

import FriendsList from "./components/friendlist/FriendList";
import friends from "./components/friendlist/friends.json";

import Transactions from "./components/transaction/Transactions.jsx";
import transactions from "./components/transaction/transactions.json";

function App() {
  return (
    <div className="App">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" statistic={statistics} />
        <FriendsList friends={friends} />
        <Transactions items={transactions} />
    </div>
  );
}

export default App;
