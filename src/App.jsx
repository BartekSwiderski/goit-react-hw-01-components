
import Profile from "./components/profile/Profile.jsx";
import Statistics from "./components/statistics/Statistics.jsx";
import FriendsList from "./components/friendlist/FriendList.jsx";
import Transactions from "./components/transaction/Transactions.jsx";
import user from "./components/profile/user.json";
import statistics from "./components/statistics/data.json";
import friends from "./components/friendlist/friends.json";
import transactions from "./components/transaction/transactions.json";

function App() {
  return (
    <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics statistic={statistics} />
        <FriendsList friends={friends} />
        <Transactions items={transactions} />
    </div>
  );
}

export default App;
