import React from 'react';
import Markdoc from '@markdoc/markdoc';

interface PreviewProps {
    content: string;
}

const Preview: React.FC<PreviewProps> = ({ content }) => {
    const ast = Markdoc.parse(content);
    const contentTree = Markdoc.transform(ast);

    const renderContent = (node: any) => {
        if (typeof node === 'string') {
            return node;
        }

        const { name, attributes, children } = node;

        // Verificamos si es un void element como <hr> que no debe tener hijos
        const voidElements = ['hr', 'img', 'br'];

        if (voidElements.includes(name)) {
            return React.createElement(name, attributes);
        }

        // Si no es un void element, renderizamos normalmente con hijos
        return React.createElement(
            name,
            attributes,
            children && children.map((child: any, index: number) => renderContent(child))
        );
    };

    return <div
        className='prose dark:prose-invert max-w-none'
    >{renderContent(contentTree)}</div>;
};

export default Preview;
