import React, { useState } from 'react'

const TreeNode = ({ node, onNodeClick,isSelected  }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNode = () => {
        setIsOpen(!isOpen);
    };
    const handleNodeClick = () => {
        onNodeClick(node); // Tıklanan node verisini üst bileşene gönder

    };
    const nodeClass = isSelected ? 'tree-node selected' : 'tree-node';

    // {JSON.stringify(node.children, null, 2)}
    return (
        <>
            <li style={{ listStyleType: 'none', margin: '5px 0' }}>


                <div onClick={()=>{handleNodeClick();}}   className={` hover:bg-slate-200 px-2 block`} style={{ cursor: 'pointer', padding: '5px', }}  >
                    <span onClick={() => { toggleNode()}} className="text-slate-700 font-semibold hover:text-cyan-700">
                        {
                            node.children && node.children.length > 0 && (isOpen ? <i className="fa-solid fa-sort-down pr-2"></i> : <i className="fa-solid fa-caret-right pr-2"></i>)
                        }
                        {!node.children || node.children.length === 0 ? (
                            <span className="pr-1">🔹</span>
                        ) : null}
                        {node.name}

                        {/* Eğer öğe alt öğe içermiyorsa, yalnızca bir icon göster */}


                    </span>


                </div>
                {isOpen && node.children && (
                    <ul style={{ paddingLeft: '20px' }} >
                        {node.children.map((childNode) => (
                            <TreeNode key={childNode.id} node={childNode} onNodeClick={onNodeClick}  />
                        ))}
                    </ul>
                )}
            </li>









        </>



    );
}

export default TreeNode