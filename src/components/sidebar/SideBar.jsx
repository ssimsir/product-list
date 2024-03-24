import { categories } from "../../helper/data";
import "./SideBar.scss"

function SideBar({ clickChange }) {
	return (
		<div className="sideBar">
			{categories.map((kategori, index) => (
				<button onClick={() => clickChange(kategori)} key={index}>
					{kategori}
				</button>
			))}
		</div>
	);
}

export default SideBar;
