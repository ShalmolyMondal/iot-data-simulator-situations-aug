import React, { useEffect, useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import _ from 'lodash';

export default function RunSituationSimulation(props) {
  const [elements, setElements] = useState(false);

  useEffect(() => {
    console.log('here', props)
    if(props.situationList && props.situationList.length) {
      const newSituaitonList = _.cloneDeep(props.situationList).map((situation, index) => {
        return {
          id: index + '',
          data: { label: situation.situation_name },
          position: { x: 250 + (index * 30), y: 250 + (index * 30)},
        }
      })
      console.log(newSituaitonList)
      setElements(newSituaitonList);
    }
  }, [props]);

  return (
  <div style={{ height: "80vh" }}>
    {
      (elements && elements.length > 0 )
      ? <ReactFlow elements={elements} />
      : <div>No Situaitons</div>
    }
  </div>
)};