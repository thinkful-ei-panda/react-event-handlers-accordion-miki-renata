import React from 'react';

class Accordion extends React.Component {
    static defaultProps = { sections: [] };

    state = {
        currentSectionIndex: 0
    }

    handleSectionClick = (index) => {
        this.setState({ currentSectionIndex: index })
    }

    renderSections() {
        const currentSection = this.props.sections[this.state.currentSectionIndex];
        return this.props.sections.map((section, index) => (
           <li key={index}>
                <button onClick={() => this.handleSectionClick(index)}>
                    {section.title}
                </button>
                {this.state.currentSectionIndex === index && <p>{currentSection.content}</p>}
            </li>
        ));
    }

    render() {
        return (
            <ul className="accordion">
                {this.renderSections()}
            </ul>
        )
    }
}

export default Accordion;