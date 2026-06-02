import "./AddProjectModal.css";

function AddProjectModal({ onClose }) {
  return (
    <div className="addProjectModal">
        <div className="addProjectModal__content">
<button type="button" onClick={onClose}>Cancel</button>
            <h2>Add New Project</h2>
            <form className="addProjectModal__form">
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
                    <input type="text" name="timeTook" required />
                </label>
                <label>
                    Reason for Disposal:
                    <textarea name="reasonForDisposal" required></textarea>
                </label>
                <label>
                    Breakdown Steps:
                    <textarea name="breakdownSteps" required></textarea>
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