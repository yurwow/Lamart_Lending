import { useState, useEffect } from 'react';
import { getTextBlocks, updateTextBlock } from '../services/api';

function EditTextBlock() {
    const [textBlocks, setTextBlocks] = useState([]);
    const [selectedBlock, setSelectedBlock] = useState(null);
    const [content, setContent] = useState('');
    const [color, setColor] = useState('#000000');
    const [fontSize, setFontSize] = useState(14);
    const [fontFamily, setFontFamily] = useState('Arial');
    const [fontWeight, setFontWeight] = useState('normal');
    const [fontStyle, setFontStyle] = useState('normal');
    const [lineHeight, setLineHeight] = useState(1.5);
    const [textAlign, setTextAlign] = useState('left');
    const [listType, setListType] = useState('none');
    const [hyperlink, setHyperlink] = useState('');

    useEffect(() => {
        // Загружаем текстовые блоки при загрузке компонента
        getTextBlocks().then(setTextBlocks);
    }, []);

    const handleSelectBlock = (block) => {
        setSelectedBlock(block);
        setContent(block.content);
        setColor(block.color);
        setFontSize(block.font_size);
        setFontFamily(block.font_family || 'Arial');
        setFontWeight(block.font_weight || 'normal');
        setFontStyle(block.font_style || 'normal');
        setLineHeight(block.line_height || 1.5);
        setTextAlign(block.text_align || 'left');
        setListType(block.list_type || 'none');
    };

    const handleSaveChanges = () => {
        if (selectedBlock) {
            const updatedData = {
                content,
                color,
                font_size: fontSize,
                font_family: fontFamily,
                font_weight: fontWeight,
                font_style: fontStyle,
                line_height: lineHeight,
                text_align: textAlign,
                list_type: listType,
                hyperlink
            };
            updateTextBlock(selectedBlock.id, updatedData).then(updatedBlock => {
                setTextBlocks(textBlocks.map(block => (block.id === updatedBlock.id ? updatedBlock : block)));
                setSelectedBlock(null);
                setContent('');
                setColor('#000000');
                setFontSize(14);
                setFontFamily('Arial');
                setFontWeight('normal');
                setFontStyle('normal');
                setLineHeight(1.5);
                setTextAlign('left');
                setListType('none');
                setHyperlink('');
            });
        }
    };

    return (
        <div>
            <h2>Edit Text Block</h2>
            <div>
                <h3>Select a Text Block to Edit</h3>
                <ul>
                    {textBlocks.map(block => (
                        <li key={block.id}>
                            <button onClick={() => handleSelectBlock(block)}>
                                {block.content.slice(0, 20)}... {/* Preview of content */}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {selectedBlock && (
                <div>
                    <h3>Editing Content</h3>
                    <label>
                        Content:
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </label>
                    <label>
                        Text Color:
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </label>
                    <label>
                        Font Size:
                        <input
                            type="number"
                            value={fontSize}
                            onChange={(e) => setFontSize(parseInt(e.target.value))}
                            min="1"
                        />
                    </label>
                    <label>
                        Font Family:
                        <select
                            value={fontFamily}
                            onChange={(e) => setFontFamily(e.target.value)}
                        >
                            <option value="Poppins">Poppins</option>
                            <option value="Montserrat Alternates">Montserrat Alternates</option>
                            <option value="Arial">Arial</option>
                            <option value="Verdana">Verdana</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Courier New">Courier New</option>
                            <option value="Times New Roman">Times New Roman</option>
                            <option value="Tahoma">Tahoma</option>
                        </select>
                    </label>
                    <label>
                        Font Weight:
                        <select
                            value={fontWeight}
                            onChange={(e) => setFontWeight(e.target.value)}
                        >
                            <option value="normal">Normal</option>
                            <option value="bold">Bold</option>
                            <option value="lighter">Lighter</option>
                            <option value="bolder">Bolder</option>
                        </select>
                    </label>
                    <label>
                        Font Style:
                        <select
                            value={fontStyle}
                            onChange={(e) => setFontStyle(e.target.value)}
                        >
                            <option value="normal">Normal</option>
                            <option value="italic">Italic</option>
                            <option value="oblique">Oblique</option>
                        </select>
                    </label>
                    <label>
                        Line Height:
                        <input
                            type="number"
                            step="0.1"
                            value={lineHeight}
                            onChange={(e) => setLineHeight(parseFloat(e.target.value))}
                            min="1"
                        />
                    </label>
                    <label>
                        Text Align:
                        <select
                            value={textAlign}
                            onChange={(e) => setTextAlign(e.target.value)}
                        >
                            <option value="left">Left</option>
                            <option value="center">Center</option>
                            <option value="right">Right</option>
                            <option value="justify">Justify</option>
                        </select>
                    </label>
                    <label>
                        List Type:
                        <select
                            value={listType}
                            onChange={(e) => setListType(e.target.value)}
                        >
                            <option value="none">None</option>
                            <option value="ordered">Ordered</option>
                            <option value="unordered">Unordered</option>
                        </select>
                    </label>
                    <label>
                        Add Hyperlink:
                        <input
                            type="text"
                            value={hyperlink}
                            placeholder="Enter URL"
                            onChange={(e) => setHyperlink(e.target.value)}
                        />
                    </label>
                    <button onClick={handleSaveChanges}>Save Changes</button>
                </div>
            )}
        </div>
    );
}

export default EditTextBlock;
