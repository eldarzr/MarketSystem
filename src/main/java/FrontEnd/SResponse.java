package FrontEnd;

public class SResponse {

	private boolean success;
	private String message;

	public SResponse() {
		this.success = true;
		this.message = "";
	}

	public SResponse(String message) {
		this.success = false;
		this.message = message;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
