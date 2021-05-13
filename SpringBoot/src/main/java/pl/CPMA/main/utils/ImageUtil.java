package pl.CPMA.main.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import java.io.*;

public class ImageUtil {

    private static final Logger logger = LoggerFactory.getLogger(ImageUtil.class);

    public static byte[] getImageBytes() {
        try {
            Resource resource = new ClassPathResource("img/user-profile.png");
            File file = resource.getFile();

            FileInputStream fis = new FileInputStream(file);
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            byte[] buf = new byte[1024];
            try {
                for (int readNum; (readNum = fis.read(buf)) != -1;) {
                    bos.write(buf, 0, readNum);
                }
            } catch (IOException ex) {
                logger.error("Can't read image bytes", ex.getMessage());
                return null;
            }
            byte[] bytes = bos.toByteArray();

            return bytes;
        }catch (IOException ex){
            logger.error("Error in ImageUtil", ex.getMessage());
            return null;
        }
    }
}
