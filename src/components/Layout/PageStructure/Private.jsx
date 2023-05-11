import PropTypes from "prop-types";

function Private({ children }) {

  // let sideMenuItems = [];
  // sideMenuItems = [
  //   ...SIDE_MENU_LIST[user.role.toUpperCase()],
  //   ...sideMenuItems,
  // ];
  return (
    <div>
        {children}
   </div>
  );
}
Private.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Private;
