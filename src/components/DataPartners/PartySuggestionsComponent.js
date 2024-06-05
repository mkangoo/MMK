import { PartySuggestions } from 'react-dadata'

const SUGGESTIONSTOKEN = 'fbdf41f0f1c61a68f2dc892abfaa827082ecdec1'

const PartySuggestionsComponent = ({ value, onChange }) => (
	<div className="suggestions__input">
		
        <PartySuggestions token={SUGGESTIONSTOKEN} value={value} onChange={onChange} />
    </div>
)

export default PartySuggestionsComponent
