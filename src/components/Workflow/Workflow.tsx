import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    // eslint-disable-next-line prettier/prettier
    AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import underline from '../../images/underline-pricing-plan.png';
import workflow from '../../images/workflow.png';

const Workflow = () => {
    return (
        <div className="workflow-section">
            <div className="container">
                <h2 className="title">
                    Workflow
                    <span>
                        <img src={underline} alt="Underline" />
                    </span>
                </h2>
                <div className="accordion-area">
                    <Accordion className="accordion-left" preExpanded={['a']}>
                        <AccordionItem uuid="a">
                            <AccordionItemHeading>
                                <AccordionItemButton>Defining Goal</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Project analysis, defining project requirements and objectives
                                    based on clients needs, cost and effort estimation, creating
                                    value and process planning.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Product Design</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Project analysis, defining project requirements and objectives
                                    based on clients needs, cost and effort estimation, creating
                                    value and process planning.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Development</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Development Project analysis, defining project requirements and
                                    objectives based on clients needs, cost and effort estimation,
                                    creating value and process planning.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Testing</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Testing Project analysis, defining project requirements and
                                    objectives based on clients needs, cost and effort estimation,
                                    creating value and process planning.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Product Release</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Product Release Project analysis, defining project requirements
                                    and objectives based on clients needs, cost and effort
                                    estimation, creating value and process planning.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Maintenance Support</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Maintenance Support Project analysis, defining project
                                    requirements and objectives based on clients needs, cost and
                                    effort estimation, creating value and process planning.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>

                    <div className="accordion-right">
                        <img src={workflow} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workflow;
