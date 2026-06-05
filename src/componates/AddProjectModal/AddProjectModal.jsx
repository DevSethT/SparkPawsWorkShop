import "./AddProjectModal.css";

function AddProjectModal({ onClose, onAddProject }) {

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newProject = {
            id: Date.now(),
            name: formData.get("projectName"),
            TypeOfProject: formData.get("projectType"),
            Status: formData.get("projectStatus"),
            ToolsUsed: formData.get("toolsUsed"),
            TimeTook: formData.get("TimeTook"),
            reasonForDesposal: formData.get("reasonForDisposal"),
            BreakdownSteps: formData.get("BreakdownSteps"),
            discription: formData.get("description"),
            images: [] // You can add logic to handle image uploads if needed
        };
        onAddProject(newProject);
    }



  return (
    <div className="addProjectModal">
        <div className="addProjectModal__content">
<button className="addProjectModal__cancelBtn" type="button" onClick={onClose}>Cancel</button>
            <h2>Add New Project</h2>
            <form className="addProjectModal__form" onSubmit={handleSubmit}>
                <label>
                    Project Name:
                    <input type="text" name="projectName" required />
                </label>
                <label>
                    Type of Project:
                    <select required name="projectType" required>
                        <option value="">Select a type</option>
                        <option value="web">Teardown</option>
                        <option value="mobile">Repair</option>
                        <option value="desktop">Exsplore</option>
                    </select>
                </label>
                <label>
                    Status:
                    <select required name="projectStatus" required>
                        <option value="">Select a status</option>
                        <option value="inProgress">In-Progress</option>
                        <option value="completed">Completed</option>
                        <option value="planned">Planned</option>
                    </select>
                </label>
                <label>
                    Tools Used:
                    <input type="text" name="toolsUsed" required />
                </label>
                <label>
                    Time Took:
                    <input type="text" name="TimeTook" required />
                </label>
                <label>
                    Reason for Disposal:
                    <textarea name="reasonForDisposal" required></textarea>
                </label>
                <label>
                    Breakdown Steps:
                    <textarea name="BreakdownSteps" required></textarea>
                </label>
                <label>
                    Description:
                    <textarea name="description" required></textarea>
                </label>
                <button type="submit">Add Project</button>
            </form>
        </div>
    </div>
  );
}

export default AddProjectModal;
