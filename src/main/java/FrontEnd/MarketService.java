package FrontEnd;

import FrontEnd.Model.UserModel;
import ServiceLayer.DataObjects.UserDataObj;
import ServiceLayer.ResponseT;
import ServiceLayer.ServiceMarket;

public class MarketService {

	ServiceMarket serviceMarket;

	public MarketService() {
		serviceMarket = new ServiceMarket();
	}

	public SResponseT<UserModel> register(String userName, String email, String password){
		ResponseT<UserDataObj> r = serviceMarket.register(userName, email, password);
		if (r.isSuccess())
			return new SResponseT<>(new UserModel(r.getData()));
		return new SResponseT<>(r.getMessage(),r.isSuccess());
	}
}
