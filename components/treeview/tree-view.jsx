import React, { useState } from 'react'
import TreeNode from './tree-node'

const Treeview = ({ treeData }) => {

    const [clickedNode, setClickedNode] = useState(null); // Tıklanan node verisini saklamak için state

    const handleNodeClick = (node) => {
        setClickedNode(node); // Tıklanan node verisini sakla
    };
    return (
        <ul id='tree-view' style={{ padding: '0', margin: '0' }} >
            {treeData.map((node) => (
                <TreeNode key={node.id} node={node} onNodeClick={handleNodeClick} />
            ))}
        </ul>
    )
}

export default Treeview