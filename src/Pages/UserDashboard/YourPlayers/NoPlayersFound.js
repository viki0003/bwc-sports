import ExTriangle from "../../../Assets/Icons/ExTriangle";

const NoPlayersFound = () => {
  return (
    <div className="no-player-card">
      <div className="header">
        <div className="image">
          <ExTriangle />
        </div>
        <div className="content">
          <span className="title">No Players Found</span>
          <p className="message">
            <p>
              There are currently no players associated with this account. To
              get started, please use the <strong>"Add Player"</strong> button
              above to create a new player profile
            </p>
          </p>
        </div>
        {/* <div className="actions">
          <button className="desactivate" type="button">
            Deactivate
          </button>
          <button className="cancel" type="button">
            Cancel
          </button>
        </div> */}
      </div>
    </div>
  );
};
export default NoPlayersFound;
