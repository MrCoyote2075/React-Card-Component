import './index.css'
import { Card } from './Card'
import DataSet from './DataSets.json'


function App() {
	return (
		<>
			{
				DataSet.map((item,key) => <Card key={key} leetCodeIds={item}/> )
			}
			<div className="url">*Click The Card to Visit The Profile</div>
		</>
	)
}
export default App


