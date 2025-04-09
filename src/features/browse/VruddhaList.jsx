import VruddhaCard from "./VruddhaCard";
import styles from "./VruddhaList.module.css";
import PropTypes from "prop-types";

function VruddhaList({ handleMapOpen, vruddhaData, onSelect }) {
  return (
    <div className={styles.vList}>
      <ul>
        {vruddhaData.map((vruddha) => (
          <li key={vruddha.v_id} onClick={() => onSelect(vruddha.v_id)}>
            <VruddhaCard handleMapOpen={handleMapOpen} vruddha={vruddha} />
          </li>
        ))}
      </ul>
    </div>
  );
}

VruddhaList.propTypes = {
  handleMapOpen: PropTypes.func.isRequired,
  vruddhaData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default VruddhaList;
