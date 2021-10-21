import React, { useEffect, useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import _ from 'lodash';
import ConfigureSituationFlow from '../ConfigureSituationFlow/ConfigureSituationFlow';

export default function RunSituationSimulation(props) {
  const [elements, setElements] = useState(false);
  const [openConfigurationPanel, setOpenConfigurationPanel] = useState(false);
  const [selectedNode, setSelectedNode] = useState();
  const [situationList, setSituationList] = useState([]);

  const closeConfigurationPanel = () => {
    setOpenConfigurationPanel(false);
  };

  const handleNodeClick = (e, node) => {
    setSelectedNode(node);
    setOpenConfigurationPanel(true);
  };

  const generateElements = () => {
    const newSituaitonList = _.cloneDeep(props.situationList).map(
      (situation, index) => {
        return {
          id: index + '',
          data: { label: situation.situation_name, situation: situation },
          position: { x: 250 + index * 30, y: 250 + index * 30 },
        };
      }
    );
    setElements(newSituaitonList);
  };

  useEffect(() => {
    if (props.situationList && props.situationList.length) {
      generateElements();
      setSituationList(props.situationList);
    }
  }, [props]);

  return (
    <div style={{ height: '80vh' }}>
      {elements && elements.length > 0 ? (
        <ReactFlow
          elements={elements}
          onNodeDoubleClick={(e, node) => handleNodeClick(e, node)}
        />
      ) : (
        <div>No Situaitons</div>
      )}
      {openConfigurationPanel && (
        <ConfigureSituationFlow
          selectedNode={selectedNode}
          situationList={situationList}
          openConfigurationPanel={openConfigurationPanel}
          closeConfigurationPanel={closeConfigurationPanel}
          elementList={elements}
        ></ConfigureSituationFlow>
      )}
    </div>
  );
}
