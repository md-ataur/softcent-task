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
                <div>
                    <div></div>
                    <div>
                        <img src={workflow} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workflow;
