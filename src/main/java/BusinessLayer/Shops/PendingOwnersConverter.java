package BusinessLayer.Shops;

import BusinessLayer.MemberRoleInShop;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.List;
import java.util.Map;

@Converter(autoApply = true)
public class PendingOwnersConverter implements AttributeConverter<Map<String, List<String>>, String> {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(Map<String, List<String>> attribute) {
        try {
            return objectMapper.writeValueAsString(attribute);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
    @Override
    public Map<String, List<String>> convertToEntityAttribute(String dbData) {
        try {
            return objectMapper.readValue(dbData, new TypeReference<Map<String, List<String>>>() {});
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
//
//    @Override
//    public Map<MemberRoleInShop, List<String>> convertToEntityAttribute(String dbData) {
//        try {
//            return objectMapper.readValue(dbData, new TypeReference<>() {});
//        } catch (JsonProcessingException e) {
//            throw new RuntimeException(e);
//        }
//    }
}
