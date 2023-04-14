package ServiceLayer;

public class Response<T> {

	private T data;
	private boolean success;
	private String message;

	public Response(T data) {
		this.data = data;
		this.success = true;
		this.message = "";
	}

	public Response(T data, String message) {
		this.data = data;
		this.success = true;
		this.message = message;
	}

	public Response(String message) {
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
