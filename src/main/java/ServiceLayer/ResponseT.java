package ServiceLayer;

public class ResponseT<T> {

	private T data;
	private boolean success;
	private String message;

	public ResponseT(T data) {
		this.data = data;
		this.success = true;
		this.message = "";
	}

	public ResponseT(T data, String message) {
		this.data = null;
		this.success = false;
		this.message = message;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
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
