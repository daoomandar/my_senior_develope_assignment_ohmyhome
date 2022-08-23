import { useEffect, useCallback } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

// cardObject is a basic object for each card in the listings.
const cardObject = {
  Uid: 1,
  cardTitle: 'Amber Sea',
  cardDescription: 'Lorem ipsum dolor sit amet', 
  cardPrice: '$ 1,000,000.00'
}

// useListing is a custom hook used to bind the logic of card listings.
function useListing(){
    const [cardList, setCardList] = useState([cardObject])
    const [disable, setDisable] = useState(false)             // This state property is used to enable/disable the 'Add Block' button.
    const [Uid, setUid] = useState(1)                         // This property will be used to set the Unique Id to newly added card.
    const navigate = useNavigate()
    const params = useParams()                                // useParam() hook is used to get the parameters from the URL.
    
    // useEffect will maintain the state on the basis of Uid in URL, 
    // update the Uid in the URL when new card is added and rerender the component.

    // Note: This code is based on the assumption that the card listing is a static data.
    // But, with the consideration that this data will come from a API, then the API can be 
    // called from the same useEffect() hook.
    useEffect(() => {
      let latestUid = parseInt(params['Uid'])
      let list = []
      if(!isNaN(latestUid)){
          for(let i=1; i<=latestUid; i++){
              list.push({...cardObject, Uid: i})
          }
          setCardList(list)
      } else {
          setCardList([{ ...cardObject, Uid: 1}])
          navigate('/1')
      }
    }, [params, navigate])

    // This will handle the 'Add block' click event.
    // It will add the new card in card list
    // Disable the 'Add block' button for 5 second
    // And update the URL with new Uid.
    const onClick = useCallback(() => {
        const newId = Uid + 1
        setCardList((prevState) => ([...prevState, {...cardObject , Uid: newId}]))
        setUid(newId)
        setDisable(true)
        navigate('/' + newId)
        setTimeout(() => setDisable(false), 5000);
    }, [Uid, navigate])

    return {onClick, cardList, disable}
}

export default useListing